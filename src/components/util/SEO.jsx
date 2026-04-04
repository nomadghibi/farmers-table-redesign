// SEO meta tags component
export function SEO({ title, description, canonical, ogImage, noindex = false }) {
  // Update document title
  if (title) {
    document.title = `${title} | The Farmer's Table`;
  } else {
    document.title = "The Farmer's Table - Farm-to-Table Dining in Wolverine, Michigan";
  }

  // Remove old meta tags and add new ones
  const updateMetaTag = (name, content, isProperty = false) => {
    const attr = isProperty ? "property" : "name";
    let tag = document.querySelector(`meta[${attr}="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(attr, name);
      document.head.appendChild(tag);
    }
    tag.content = content;
  };

  if (description) {
    updateMetaTag("description", description);
    updateMetaTag("og:description", description, true);
  }

  if (noindex) {
    updateMetaTag("robots", "noindex, nofollow");
  } else {
    updateMetaTag("robots", "index, follow");
  }

  if (canonical) {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
  }

  if (ogImage) {
    updateMetaTag("og:image", ogImage, true);
  }

  updateMetaTag("og:site_name", "The Farmer's Table", true);
  updateMetaTag("og:type", "website", true);

  return null;
}
