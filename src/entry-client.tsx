/**
 * Compatibility entry for Netlify/GitHub deployments that still reference
 * /src/entry-client.tsx from an older index.html.
 *
 * The real static-host bootstrap lives in ./spa-entry.
 */
import "./spa-entry";