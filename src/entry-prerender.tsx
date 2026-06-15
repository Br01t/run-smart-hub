import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

type PrerenderResult = {
  appHtml: string;
  headTags: string;
};

export const render = (url: string): Promise<PrerenderResult> => {
  const helmetContext = {} as any;
  const chunks: Buffer[] = [];

  return new Promise((resolve, reject) => {
    let settled = false;

    const stream = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <App prerenderUrl={url} />
      </HelmetProvider>,
      {
        onAllReady() {
          const writable = new Writable({
            write(chunk, _encoding, callback) {
              chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
              callback();
            },
          });

          writable.on("finish", () => {
            if (settled) return;
            settled = true;

            const helmet = helmetContext.helmet;
            const headTags = [
              helmet?.title?.toString(),
              helmet?.meta?.toString(),
              helmet?.link?.toString(),
              helmet?.script?.toString(),
            ]
              .filter(Boolean)
              .join("\n    ");

            resolve({
              appHtml: Buffer.concat(chunks).toString("utf8"),
              headTags,
            });
          });

          stream.pipe(writable);
        },
        onShellError(error) {
          if (settled) return;
          settled = true;
          reject(error);
        },
        onError(error) {
          console.error(error);
        },
      },
    );

    setTimeout(() => {
      if (settled) return;
      settled = true;
      stream.abort();
      reject(new Error(`Prerender timed out for ${url}`));
    }, 30000);
  });
};