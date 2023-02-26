import s from "./index.module.scss";
interface page {
  usersPerPage: number;
  totalUsers: number;
  paginate: Function;
}
const Pagination = ({ usersPerPage, totalUsers, paginate }: page) => {
  const pageNumbers = [];
  for (let i: number = 1; i <= totalUsers / usersPerPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={s.pagination}>
      {pageNumbers.map((number) => (
        <button onClick={() => paginate(number)} key={number}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
