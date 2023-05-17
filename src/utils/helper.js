import {sessionStatus} from './constants';
import {colors} from './theme';

export const getStatusColor = status => {
  switch (status) {
    case sessionStatus.Pending:
      return colors.pandingColor;
    case sessionStatus.Confirmed:
      return colors.green;
    case sessionStatus.Cancelled:
      return colors.red;
    case sessionStatus.Rescheduled:
      return colors.darkYellow;
    default:
      return colors.green;
  }
};

export const getStatusBackgroundColor = status => {
  switch (status) {
    case sessionStatus.Pending:
      return colors.pendingOpacity;
    case sessionStatus.Confirmed:
      return colors.greenOpacity;
    case sessionStatus.Cancelled:
      return colors.redOpacity;
    case sessionStatus.Rescheduled:
      return colors.darkYellowOpacity;
    default:
      return colors.greenOpacity;
  }
};
