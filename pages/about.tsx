import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function About() {
  return (
    <Layout>
      <main className="pv3 pv5-ns vh-100 white dt mw8 center">
        <div className="items-center">
          <p className="lh-copy">
            VRS is a fully-functional e-commerce store, built on the serverless
            paradigm.
            <br />
            <br />
            With a single command `npx vercel`, the store deploys instantly, scales
            automatically, and requires zero supervision. The underlying
            infrastructure can handle peak time traffic with consistent,
            blazing-fast performance.
          </p>
          <p className="lh-copy" />
          <p className="lh-copy">
            The source-code for VRS is open-sourced on{" "}
            <a
              className="link dim white underline"
              href="https://github.com/vercel/vrs"
            >
              GitHub
            </a>
            .<br />
            You can deploy VRS to our scalable serverless infrastructure{" "}
            <strong>free of cost</strong>.
            <br />
            Thanks to the on-demand pricing model, you don’t pay a cent for
            infrastructure during idle time.
          </p>
          <p className="lh-copy">
            Once you have{" "}
            <a
              className="link dim white underline"
              href="https://vercel.com/cli"
            >
              Vercel CLI
            </a>{" "}
            installed, clone the{" "}
            <a
              className="link dim white underline"
              href="https://github.com/vercel/vrs"
            >
              VRS repo
            </a>
            , specify the necessary secrets with the Vercel CLI, and run `npx vercel` — that’s
            it. The{" "}
            <a
              className="link dim white underline"
              href="https://vercel.com/docs/concepts/projects/environment-variables"
            >
              environment variables section
            </a>{" "}
            on our website explains how you can specify the secrets.
          </p>
          <p className="lh-copy">
            Our mission at Vercel is to make the cloud accessible to everyone. We
            do that by creating products that improve developer experience,
            provisioning infrastructure that is globally available, and by
            teaching the developer community about serverless-related
            technology. We made VRS to showcase that it’s possible to create a
            fully functional, high-performance e-commerce store without
            requiring infrastructure know-how. <br />
            <br />
            Let us know how we did on{" "}
            <a
              className="link white underline dim"
              href="https://twitter.com/vercel"
            >
              Twitter
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </Layout >
  );
}
