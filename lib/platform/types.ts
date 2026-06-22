export type PlatformStatus = "static-ready" | "database-ready" | "future";

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
  starterRecipeIds: string[];
  templateIds: string[];
};
