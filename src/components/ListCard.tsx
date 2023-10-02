import Card from "./Card";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import "./swiper-style.css";

const ListCard = ({ data, title }: { data: any[]; title: string }) => {
    // Initialize the Swiper only if there is data
    if (data && data.length > 0) {
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            slidesPerView: 1,
            breakpoints: {
                '400': {
                    slidesPerView: 2,
                },
                '620': {
                    slidesPerView: 3,
                },
                '1024': {
                    slidesPerView: 4,
                },
                '1280': {
                    slidesPerView: 5,
                },
                '1480': {
                    slidesPerView: 6,
                },
            },
            spaceBetween: 4,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                hide: false,
            }
        });
        if(swiper){
            console.log("ok");
        }

        return (
            <div className="w-11/12 md:w-10/12 mx-auto py-5 dark:text-white text-black z-[10]">
                <div className="swiper group">
                    <h2 className="text-2xl font-bold leading-relaxed mb-4">{title}</h2>
                    <div className="swiper-wrapper swiper-no-swiping">
                        {data.map((item: any) => (
                            <div className="swiper-slide" key={item.id}>
                                <Card movie={item} />
                            </div>
                        ))}
                    </div>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        );
    } else {
        // Display a message when there's no data

    }
};

export default ListCard;
