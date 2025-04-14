import { useDraggable, useDroppable } from "@dnd-kit/core";
import { useEffect } from "react";

export function Dragable({ id, children, onDragging, ...props }: any) {
  const { listeners, attributes, setNodeRef, isDragging } = useDraggable({ id });

  useEffect(() => {
    if (isDragging && onDragging) {
      onDragging();
    }
  }, [isDragging, onDragging]);

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} {...props}>
      {children}
    </div>
  );
}

export function Droppable({ id, children, onIsOver, ...props }: any) {
  const { isOver, setNodeRef } = useDroppable({ id });
  useEffect(() => {
    if (isOver && onIsOver) {
      onIsOver();
    }
  }, [isOver, onIsOver]);

  return (
    <div ref={setNodeRef} {...props}>
      {children}
    </div>
  );
}
