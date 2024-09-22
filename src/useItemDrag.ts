import { useDrag } from "react-dnd"
import { useAppState } from "./AppStateContext"
import { DragItem } from "./DragItem"
import { useEffect } from "react"
import { getEmptyImage } from "react-dnd-html5-backend"

export const useItemDrag = (item: DragItem) => {
  // console.log(item)
  const {type} = item
  const { dispatch } = useAppState()
  const [, drag, preview ] = useDrag({
    item ,
    type,
    // begin: () =>
    //   dispatch({
    //     type: "SET_DRAGGED_ITEM",
    //     payload: item
    //   }),
    end: () => dispatch({ type: "SET_DRAGGED_ITEM", payload: undefined })
  })
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);
  return { drag }
}
