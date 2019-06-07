import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  template,
  move
} from "@angular-devkit/schematics";
import { strings } from "@angular-devkit/core";

// declare AddFilesInterface
interface AddFilesInterface {
  name: string;
}

export function schematicStarter(_options: AddFilesInterface): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // todo: use the template() function and provide the strings and _options members
    const rules: Rule[] = [template({ ...strings, ..._options })];

    const source = url("./files");
    return apply(source, rules)(context);
  };
}
