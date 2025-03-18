import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.info}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.category}>
          <span>Followers</span>
          <span className={css.value}>{stats.followers}</span>
        </li>
        <li className={css.view}>
          <span>Views</span>
          <span className={css.value}>{stats.views}</span>
        </li>
        <li className={css.category}>
          <span>Likes</span>
          <span className={css.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
