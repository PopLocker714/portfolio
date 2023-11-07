import { noop } from "../ts/noop";
import { generateRandomString } from "./generateRandomIndex";

interface IListItemProperties {
  As?: "a" | "li" | "button" | "div";
  className?: string;
  onClick?: (id: string) => void;
}

interface IListProps {
  list: { id?: string; text?: string | React.ReactNode }[];
  item: IListItemProperties;
}

export const GenerateList = ({
  list,
  item: { As = "div", className = "", onClick = noop },
}: IListProps) => {
  return (
    <>
      {list.map(({ id, text }) => {
        const currentId = id || generateRandomString();
        return (
          <As
            onClick={() => onClick(currentId)}
            className={className}
            key={currentId}
          >
            {text}
          </As>
        );
      })}
    </>
  );
};
