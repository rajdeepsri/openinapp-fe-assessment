"use client"
import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import dropIcon from '../images/dropIcon.svg'
import Image from "next/image";

const Dropdown = ({ onSelect, data }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleDropdown = (txt) => {
    onSelect(txt);
    setSelected(txt);
    setShowDropdown(false);
  };

  return (
    <div
      style={{
        borderBottomLeftRadius: showDropdown ? "0" : "5px",
        borderBottomRightRadius: showDropdown ? "0" : "5px",
        padding:'0'
      }}
      className={styles.container}
    >
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className={styles.dropdown}
        // style={{padding:'0'}}
      >
        <p className={styles.name_txt}>{selected || "Select Tags"}</p>
        <Image alt="dropdownIcon" src={dropIcon}/>
      </div>

      {showDropdown && (
        <div className={styles.list}>
          {data.map((item, ind) => (
            <p className={styles.list_name} key={ind} onClick={() => handleDropdown(item)}>
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
