const ErrorBoundary = () => (
  <div className="d-flex align-items-center page-content-height">
    <div className="align-middle text-center w-100">
      <h1 className="display-4">Une erreur est survenue</h1>
      <p className="mb-4">
        Il semble qu&apos;il y ait un problème. Notre équipe a été notifiée.
      </p>
      <a className="btn btn-primary" href="/">
        Revenir sur la page d&apos;accueil
      </a>
    </div>
  </div>
)

export default ErrorBoundary
