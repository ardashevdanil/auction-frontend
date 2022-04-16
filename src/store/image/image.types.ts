import type { Instance, SnapshotIn } from "mobx-state-tree";
import { ImageModel } from "./image";

export type ImageType = Instance<typeof ImageModel>;
export type ImageSnapshotType = SnapshotIn<typeof ImageModel>;
