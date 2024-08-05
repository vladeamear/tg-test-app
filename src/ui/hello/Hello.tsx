import useTgWebApp from "../../hooks/useTgWebApp";

const Hello = ({ variant }: { variant: string }) => {
  const { user } = useTgWebApp();

  return user ? (
    <>
      <h1>
        Hello, {user.first_name} {user.last_name}
      </h1>
      <img src={user.photo_url} className="avatar" />
      <table className="faded">
        <tr>
          <td className="bold">id</td>
          <td>{user.id}</td>
        </tr>
        <tr>
          <td className="bold">username</td>
          <td>{user.username}</td>
        </tr>
        <tr>
          <td className="bold">является ботом</td>
          <td>{user.is_bot ? "Да" : "Нет"}</td>
        </tr>
        <tr>
          <td className="bold">есть премиум подписка</td>
          <td>{user.is_premium ? "Да" : "Нет"}</td>
        </tr>
      </table>
    </>
  ) : (
    <>
      <h1>Hello World</h1>
      <p>
        При данном варианте открытия WebApp - {variant} - данные пользователя не
        загружаются
      </p>
    </>
  );
};

export default Hello;
