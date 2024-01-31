import { CheckCircleIcon, StarIcon } from "@/assets/svg";
import XMarkIcon from "@/assets/svg/XmarkIcon";
import { TTask } from "@/types";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type TListItemProps = {
  item: TTask;
  handleDeleteTodo: (id: number) => void;
  handleImportantTodo: (id: number) => void;
  handleCompleteTodo: (id: number) => void;
  handleEditTodo: (id: number, content: string) => void;
};

const ListItem = (props: TListItemProps) => {
  const {
    item,
    handleDeleteTodo,
    handleImportantTodo,
    handleCompleteTodo,
    handleEditTodo,
  } = props;
  const { t } = useTranslation();
  const [isEdited, setIsEdited] = useState(false);

  return (
    <div className="py-1 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <button
          onClick={() => {
            handleCompleteTodo(item.id);
          }}
        >
          <CheckCircleIcon
            width={20}
            className={!item.isCompleted ? "opacity-10" : ""}
          />
        </button>
        <div className="flex flex-col">
          {!isEdited ? (
            <p
              onDoubleClick={() => setIsEdited(true)}
              key={item.id}
              className={`text-left text-green-800 ${
                item.isCompleted ? "line-through" : ""
              }`}
            >
              {item.content}
            </p>
          ) : (
            <input
              onBlur={() => setIsEdited(false)}
              type="text"
              className="w-full text-red-700 rounded-md border-none focus:outline-none "
              placeholder={t("PLACEHOLDER")}
              value={item.content}
              onChange={(e) => handleEditTodo(item.id, e.target.value)}
            />
          )}
        </div>
      </div>
      <div className="flex gap-1">
        <button
          onClick={() => {
            handleImportantTodo(item.id);
          }}
        >
          <StarIcon
            width={20}
            fill="gold"
            className={!item.isImportant ? "opacity-10" : ""}
          />
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(item.id);
          }}
        >
          <XMarkIcon width={20} />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
