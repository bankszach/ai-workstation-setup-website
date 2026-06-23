export type PlatformStatus = "public-preview" | "database-ready" | "future";

export type ServiceBoundary = {
  included: string[];
  excluded: string[];
  humanReviewRequired: string[];
};

export type RecipePacket = {
  id: string;
  title: string;
  version: string;
  status: "active" | "draft";
  audience: string;
  purpose: string;
  approvedSources: string[];
  inputs: string[];
  steps: string[];
  outputs: string[];
  verification: string[];
  stopConditions: string[];
  apiPath: string;
};

export type TemplateManifest = {
  id: string;
  title: string;
  format: "markdown" | "csv";
  purpose: string;
  path: string;
  packetRole: string;
};

export type DataServiceModel = {
  primaryDatabase: string;
  objectStorage: string;
  logicSurface: string;
  futureMcpSurface: string;
  tables: string[];
  blobArtifacts: string[];
};

export type ContactProfile = {
  status: "provider-identified";
  contactPath: string;
  operatingModel: string;
  serviceArea: string;
  publicLocationStatus: string;
};

export type ProviderProfile = {
  operatorName: string;
  operatingCompany: string;
  companyStatus: string;
  baseLocation: string;
  serviceRelationship: string;
  publicIdentitySummary: string;
  verificationNote: string;
};

export type BuyerFaq = {
  question: string;
  answer: string;
};

export type ServiceBrief = {
  name: string;
  oneLine: string;
  provider: ProviderProfile;
  audience: string[];
  problemSolved: string;
  offer: string;
  goodFit: string[];
  notFit: string[];
  contact: ContactProfile;
  recommendedChatbotSummary: string;
  recommendedQuestions: string[];
  urls: {
    homepage: string;
    brief: string;
    setupManifest: string;
    recipes: string;
    serviceBrief: string;
    providerProfile: string;
    buyerFaq: string;
    llms: string;
  };
};

export type SetupManifest = {
  service: string;
  version: string;
  generatedAt: string;
  status: PlatformStatus;
  purpose: string;
  humanEntryPoints: string[];
  machineEntryPoints: string[];
  serviceBoundary: ServiceBoundary;
  dataServiceModel: DataServiceModel;
  contact: ContactProfile;
  provider: ProviderProfile;
  starterRecipeIds: string[];
  templateIds: string[];
};
