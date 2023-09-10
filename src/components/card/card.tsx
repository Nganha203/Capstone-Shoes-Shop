import React, { useState } from "react";
import css from "./card.module.scss";
import { Link, useNavigate } from "react-router-dom";
import HeartIconWhite from "src/assets/icons/heart.icon";
import IconHeartRed from "src/assets/icons/heart-red.icon";
import { getLocalStorage } from "src/utils";
const data = {
  id: 1,
  name: "Adidas Prophere",
  alias: "adidas-prophere",
  price: 350,
  description:
    "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement. ",
  size: "[36,37,38,39,40,41,42]",
  shortDescription:
    "The midsole contains 20% more Boost for an amplified Boost feeling. ",
  quantity: 995,
  deleted: false,
  categories:
    '[{"id":"ADIDAS","category":"ADIDAS"},{"id":"MEN","category":"MEN"},{"id":"WOMEN","category":"WOMEN"}]',
  relatedProducts: "[2,3,5]",
  feature: true,
  image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
};
export type TCard = {
  image: string;
  name: string;
  shortDescription: string;
  price: number;
  id: number;
};
type Props = {
  data: TCard;
};
export function Card(props: Props) {
  const [isLiked, setIsLiked] = useState(false);
  const tokenLogin = getLocalStorage("accessToken");
  const navigate = useNavigate();
  const toggleLike = () => {
    setIsLiked((isLiked) => !isLiked); // Đảo ngược trạng thái khi biểu tượng được click
  };
  const handleBuyClick = (id: number) => {
    if (tokenLogin) {
      navigate(`/detail/${id}`);
    } else {
      // Hiện thông báo xác nhận (đây chỉ là ví dụ sử dụng window.confirm, bạn có thể sử dụng thư viện UI khác nếu muốn)
      if (
        window.confirm(
          "Bạn cần đăng nhập để mua sản phẩm này. Bạn có muốn đăng nhập ngay?",
        )
      ) {
        // Giả định '/login' là URL trang đăng nhập
        navigate("/login");
      }
    }
  };
  const { data } = props;
  return (
      <div className={css["card"]}>
        <div className={css["icon-heart"]}>
          {isLiked ? (
            <div className={css["icon-heart-red"]} onClick={toggleLike}>
              <IconHeartRed />
            </div>
          ) : (
            <div onClick={toggleLike} className={css["icon-heart-white"]}>
              <HeartIconWhite />
            </div>
          )}
        </div>
        <div className={css["content"]}>
          <img className={css["img"]} src={data.image} />
          <p className={css["tittle"]}>{data.name}</p>
          <p className={css["decs"]}>{data.shortDescription}</p>
        </div>
        <div className={css["action"]}>
          <div
            className={css["action-buy"]}
            onClick={() => handleBuyClick(data.id)}
          >
            Buy
          </div>
          {/* <Link className={css['action-buy']} to={`/detail/${data.id}`}>Buy</Link> */}
          <Link className={css["action-price"]} to={`/detail/${data.id}`}>
            {data.price}$
          </Link>
        </div>
      </div>
  );
}
