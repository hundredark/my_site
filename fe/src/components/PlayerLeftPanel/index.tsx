import {playerStatusType} from "../../utils/types";

import {
    StepBackwardFilled,
    CaretRightFilled,
    PauseOutlined,
    StepForwardFilled
} from '@ant-design/icons'
import './index.css'


interface IProp {
  status: playerStatusType,
  play: () => void,
  pause: () => void
}

export const PlayerLeftPanel = (props: IProp) => {
  const {status, play, pause} = props

  return (
    <div className={"control-panel"}>
      <div className={"player-btn"}>
        <StepBackwardFilled
            className={"hover-item small-btn"}
        />
      </div>

      <div className={"player-btn"}>
        {
          status === 'playing'
          ?
          <PauseOutlined
            className={"hover-item big-btn"}
            onClick={ pause }
          />
          :
          <CaretRightFilled
            className={"hover-item big-btn"}
            onClick={ play }
          />
        }
      </div>

      <div className={"player-btn"}>
        <StepForwardFilled
            className={"hover-item small-btn"}
        />
      </div>
    </div>
  )
}
