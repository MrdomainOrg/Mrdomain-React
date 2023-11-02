// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type DomainType = {
  domainPart: string;
  tldPrt: string;
};

export const parseDomain = (domain: string): DomainType => {
  const parts = domain.trim().toLowerCase().split('.');

  if (parts.length < 2) {
    throw new Error('Invalid domain format');
  }

  const tldPart = parts.pop() as string;
  const domainPart = parts.join('.');

  return {
    domainPart,
    tldPrt: tldPart,
  };
};
