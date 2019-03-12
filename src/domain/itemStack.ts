import Item from "@/domain/item.ts";
import Unit from "./unit";

export default class ItemStack {
  public active = false;

  constructor(
    public id: number,
    public name: string,
    public amount: number,
    public unit: Unit,
    public imageName: string,
    public items: Item[]
  ) {}
}
