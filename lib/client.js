import imageUrlBuilder from "@sanity/image-url";
import SanityClientConstructor from "@sanity/client";

export const client = SanityClientConstructor({
  projectId: "cingd101",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
