import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort, setFilter } from "../../features/sidebar/SidebarSlice";

export default function Sidebar() {
  const { sort, filter } = useSelector((state) => state.sidebar);

  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      {/* <!-- sidebar --> */}
      <aside>
        <div className="sidebar-items">
          <div className="sidebar-content">
            <h4>Sort</h4>
            <select
              name="sort"
              id="lws-sort"
              className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
              value={sort}
              onChange={handleSortChange}
            >
              <option value="">Default</option>
              <option value="newest">Newest</option>
              <option value="most_liked">Most Liked</option>
            </select>
          </div>
          <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
              {/* <!-- handle filter on button click --> */}
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="lws-all"
                  className="radio"
                  value="all"
                  checked={filter === "all"}
                  onChange={handleFilterChange}
                />
                <label htmlFor="lws-all">All</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="lws-saved"
                  className="radio"
                  value="saved"
                  checked={filter === "saved"}
                  onChange={handleFilterChange}
                />
                <label htmlFor="lws-saved">Saved</label>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
