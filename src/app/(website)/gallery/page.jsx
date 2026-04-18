'use client'
import React, {useState} from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/plugins/thumbnails.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function PhotoGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const [index, setIndex] = useState(-1);

  const tabs = [
    { name: "2023", current: activeTab === 0 },
    { name: "2022", current: activeTab === 1 },
    { name: "2021", current: activeTab === 2 },
    { name: "2020", current: activeTab === 3 },
    // { name: "2019", current: activeTab === 4 },
    // { name: "2018", current: activeTab === 5 },
    // { name: "2017", current: activeTab === 6 },
    // { name: "2016", current: activeTab === 7 },
    // { name: "2015", current: activeTab === 8 },
    // { name: "2014", current: activeTab === 9 },
    // { name: "2013", current: activeTab === 10 },
  ];
	const firstTab = 2023

	// const photos = unsplashPhotos[firstTab-activeTab].map((photo, index) => {
  //   const width = photo.width * 4;
  //   const height = photo.height * 4;
  //   return {
  //     src: unsplashLink(photo.id, width, height),
  //     key: `${index}`,
  //     width,
  //     height,
  //     // images: breakpoints.map((breakpoint) => {
  //     //   const breakpointHeight = Math.round((height / width) * breakpoint);
  //     //   return {
  //     //     src: unsplashLink(photo.id, breakpoint, breakpointHeight),
  //     //     width: breakpoint,
  //     //     height: breakpointHeight,
  //     //   };
  //     // }),
  //   };
  // });

const images = {
  2023: require.context("../../../../public/images/gallery/2023", true),
  2022: require.context("../../../../public/images/gallery/2022", true),
  2021: require.context("../../../../public/images/gallery/2021", true),
  2020: require.context("../../../../public/images/gallery/2020", true),
  // 2019: require.context("../../../../public/images/gallery/2019", true),
  // 2018: require.context("../../../../public/images/gallery/2018", true),
  // 2017: require.context("../../../../public/images/gallery/2017", true),
};

const imagelist = images[firstTab-activeTab].keys().map((image) => (images[firstTab-activeTab])(image).default);
  const slides = imagelist.map(({ src }) => ({ src }));

  return (
    <>
      <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
          {/* <Tabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          /> */}
					{/* TABS */}
					<div>
						<div className="sm:hidden">
							<label htmlFor="tabs" className="sr-only">
								Select a tab
							</label>
							<select
								id="tabs"
								name="tabs"
								className="block mb-8 w-full rounded-md border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
								defaultValue={tabs?.find((tab) => tab.current).name}
								onChange={(e) => setActiveTab(parseInt(e.target.value))}
							>
								{tabs.map((tab, index) => (
									<option key={tab.name} value={index}>
										{tab.name}
									</option>
								))}
							</select>
						</div>
						<div className="hidden mb-8 sm:block">
							<div className="border-b border-gray-200">
								<nav className="-mb-px flex" aria-label="Tabs">
									{tabs.map((tab, index) => (
										<div
											key={tab.name}
											// href={tab.href}
											className={classNames(
												tab.current
													? 'border-cyan-500 text-cyan-600'
													: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
												'w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm',
												{
													'border-cyan-500 text-cyan-600': activeTab === index,
												}
											)}
											aria-current={activeTab === index ? 'page' : undefined}
											onClick={() => setActiveTab(index)}
										>
											{tab.name}
										</div>
									))}
								</nav>
							</div>
						</div>
					</div>
          <PhotoAlbum
            layout="rows"
            photos={imagelist}
            targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
          />
          <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={slides}
						plugins={[Fullscreen, Slideshow]} //Fullscreen, Slideshow, Thumbnails, Zoom
          />
        </main>
      </div>
    </>
  );
}
