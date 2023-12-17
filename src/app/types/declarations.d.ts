declare module "*.scss" {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module "*.svg" {
  const svg: any;
  export default svg;
}
declare module "*.png" {
  const png: any;
  export default png;
}

declare module "*.jpg" {
  const jpg: any;
  export default jpg;
}

declare module "*.jpeg" {
  const jpeg: any;
  export default jpeg;
}

declare const _IS_DEV_: boolean;