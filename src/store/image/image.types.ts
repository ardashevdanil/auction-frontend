import type { Instance, SnapshotIn } from "mobx-state-tree";
import { Image } from "./image";

export type ImageType = Instance<typeof Image>;
export type ImageSnapshotType = SnapshotIn<typeof Image>;
