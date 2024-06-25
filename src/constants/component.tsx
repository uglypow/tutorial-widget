import CleanPageTourModal from '@/components/CleanPageTourModal';
import Empty from '@/components/Empty';
import PageTourModal from '@/components/PageTourModal';
import PageTourModalNoButton from '@/components/PageTourModalNoButton';

export type TourComponent = "PageTourModal" | "PageTourModalNoButton" | "CleanPageTourModal" | "Empthy"

export const componentMapping = {
  PageTourModal: PageTourModal,
  PageTourModalNoButton: PageTourModalNoButton,
  CleanPageTourModal: CleanPageTourModal,
  Empthy: Empty,
};
