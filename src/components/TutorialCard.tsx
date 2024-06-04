import {
  NcBadge,
  NcButton,
  NcCard,
  NcCardFooter,
  NcCardTitle,
} from "@nipacloud/nc-design-system-react";
import { FC } from "react";

const TutorialCard: FC = () => {
  return (
    <>
      <NcCard className="border-2 border-black bg-white p-2 m-2 h-[200px] w-[250px]">
        <NcCardTitle className="text-black">
          <div className="text-red-500">Logo</div>
          <div slot="description">This is logo</div>
          <NcBadge color="pink">Pink</NcBadge>
        </NcCardTitle>

        <NcCardFooter className="flex justify-end">
          <NcButton type="text" size="sm">
            Next
          </NcButton>
        </NcCardFooter>
      </NcCard>
    </>
  );
};

export default TutorialCard;
