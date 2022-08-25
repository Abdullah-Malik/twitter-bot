export default interface ContentSource {
  getContentToPost(): Promise<string>;
}
