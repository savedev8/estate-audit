import service_slider_1 from "@/shared/assets/img/service_slider_1.jpg";
import service_slider_2 from "@/shared/assets/img/service_slider_2.jpg";
import { AppImage } from "@/shared/ui/AppImage";

export const DetailsBanner = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <div className="container">
        <div className="d-flex gap-2 gap-md-5">
          <div>
            <AppImage src={service_slider_1} alt="image-here" />
          </div>
          <div>
            <AppImage src={service_slider_2} alt="image-here" />
          </div>
        </div>
      </div>
    </>
  );
};
