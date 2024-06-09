import { atom } from "recoil";

const cartAtom = atom({
  key: "cart",
  default: [], // Initial cart state (empty array)
});

export default cartAtom;