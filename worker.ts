export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/cgi-bin/watermark")) {
      const imagePath = url.searchParams.get("url");
      const imageUrl = new URL(imagePath, request.url).href;

      try {
        const imageResp = await env.SITE.fetch(new Request(imageUrl));
        const watermarkResp = await fetch("https://pub-b4e6ed9616414ace9314e84c0a5cd3e8.r2.dev/kf.jpg");

        const response = (
          await env.IMAGES.input(imageResp.body)
            .draw(
              env.IMAGES.input(watermarkResp.body)
                .transform({ width: 100, height: 100 }),
              { bottom: 10, right: 10, opacity: 0.75 }
            )
            .output({ format: "image/png" })
        ).response();

        return response;
      } catch (error) {
        console.log(error);
        return fetch(imageUrl);
      }
    }
    return env.ASSETS.fetch(request);
  }
}
