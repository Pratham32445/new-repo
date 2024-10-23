import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/header.module.css";
import DropIcon from "../assets/icons/down.svg";
import Display from "../assets/icons/Display.svg";
import { useRecoilState } from "recoil";
import { selectedState } from "../Store/atoms";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [, setState] = useRecoilState(selectedState);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.dropdown} ref={dropdownRef}>
        <div
          className={styles.flex}
          onClick={toggleDropdown}
          style={{ cursor: "pointer", gap: 10 }}
        >
          <img src={Display} alt="dislay" />
          <p>Display</p>
          <img src={DropIcon} alt="Toggle Dropdown" />
        </div>

        {isDropdownOpen && (
          <div className={styles.dropdownContent}>
            <div className={styles.display}>
              <p>Grouping</p>
              <select onChange={handleStateChange}>
                <option value="Status">Status</option>
                <option value="User">User</option>
                <option value="Priority">Priority</option>
              </select>
            </div>
            <div className={styles.ordering}>
              <p>Ordering</p>
              <select>
                <option value="asc">Priority</option>
                <option value="desc">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
