import Empty from '@/components/Empty';
import PageTourModal from '@/components/PageTourModal';
import PageTourModalNoButton from '@/components/PageTourModalNoButton';

export type TourComponent = "PageTourModal" | "PageTourModalNoButton" | "Empthy"

export const componentMapping = {
  PageTourModal: PageTourModal,
  PageTourModalNoButton: PageTourModalNoButton,
  Empthy: Empty,
};
