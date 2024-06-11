import { NcCard, NcCardTitle, NcCardBody, NcCardFooter, NcButton } from "@nipacloud/nc-design-system-react";
import { FC } from "react";

const Empthy: FC = () => {
  return (
    <>
      <div id="tutorial-modal">
      <NcCard className="border-2 border-black bg-white h-fit min-w-[300px] w-fit text-black">
          <NcCardTitle>
            <div>Card Title</div>
            <div slot="description">Title description</div>
          </NcCardTitle>

          <NcCardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi nemo sed tempora
            incidunt eligendi voluptatum veritatis voluptates, odio obcaecati eius ducimus dolore,
            impedit unde temporibus dolor sequi! Officia, sequi.
          </NcCardBody>

          <NcCardFooter>
            <NcButton left-icon="check" type="text" size="sm">
              Confirm
            </NcButton>
          </NcCardFooter>
        </NcCard>
      </div>
    </>
  )
}

export default Empthy