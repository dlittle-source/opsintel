export interface EnterpriseVersion {
  major: number;
  minor: number;
  patch: number;
  releaseChannel: "Production";
  semanticVersion: string;
}

export function getEnterpriseVersion(): EnterpriseVersion {
  const version = {
    major: 1,
    minor: 0,
    patch: 0,
  };

  return {
    ...version,
    releaseChannel: "Production",
    semanticVersion: `${version.major}.${version.minor}.${version.patch}`,
  };
}