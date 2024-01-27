"use client";
import * as XLSX from "xlsx";
import { useState } from "react";
import styles from "./upload.module.css";
import logo2 from "../images/logo2.svg";
import Image from "next/image";
import bg from "../images/smallbg.svg";
import upload from "../images/upload.svg";
import Notification from "../images/Notification.svg";
import calander from "../images/calander.svg";
import schedule from "../images/Schedule.svg";
import settings from "../images/Settings.svg";
import invoice from "../images/Invoice.svg";
import dashIcon from "../images/dashIcon.svg";
import Dashboard from "../images/Dashboard.svg";
import headerIcons from "../images/headerIcons.svg";
import uploadIcon from "../images/uploadIcon.svg";
import excelupload from "../images/excelupload.svg";
import Dropdown from "../dropdown/Dropdown";
import close from "../images/close.svg";
import close2 from "../images/plus.svg";
import threeLines from "../images/threeLines.svg";
import Spinner from "../spinner/spinner";

const Upload = () => {
  const [objData, setObjData] = useState(null);
  const [fileName, setFileName] = useState("");
  const [toggle, setToggle] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleFile = (e) => {
    setShowSpinner(true);
    let file = e.target.files[0];
    setFileName(file.name);
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = (e) => {
      const wb = XLSX.read(e.target.result, { type: "buffer" });
      const wsName = wb.SheetNames[0];
      const ws = wb.Sheets[wsName];
      var data = XLSX.utils.sheet_to_json(ws);
      setObjData(
        data.map((a) => {
          return { ...a, selectedTags: [] };
        })
      );
      setShowSpinner(false);
    };
  };

  function onSelect(data, indx) {
    setObjData((prev) => {
      return prev.map((a, i) => {
        if (prev[indx].selectedTags.includes(data)) return a;
        return i == indx
          ? { ...a, selectedTags: [...prev[indx].selectedTags, data] }
          : a;
      });
    });
  }

  function handleFilter(data, indx) {
    setObjData((prev) => {
      return prev.map((a, i) => {
        let tempData = prev[indx].selectedTags.filter((a) => a != data);
        return i == indx ? { ...a, selectedTags: tempData } : a;
      });
    });
  }

  const menuToggle = () => setToggle(!toggle);

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFileName(file.name);

    let reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = (e) => {
      const wb = XLSX.read(e.target.result, { type: "buffer" });
      const wsName = wb.SheetNames[0];
      const ws = wb.Sheets[wsName];
      var data = XLSX.utils.sheet_to_json(ws);
      setObjData(
        data.map((a) => {
          return { ...a, selectedTags: [] };
        })
      );
      setShowSpinner(false);
    };
  }

  return (
    <div className={styles.outter}>
      <div className={toggle ? styles.menu_toggle : styles.menu}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <Image
            className={styles.menu_logo}
            style={{ alignSelf: "center" }}
            src={logo2}
            alt="logo2"
          />
          <Image
            onClick={menuToggle}
            className={styles.close2}
            src={close2}
            style={{ cursor: "pointer" }}
            alt="close2"
          />
        </div>
        <div className={styles.menu_options}>
          <Image style={{ marginLeft: "2rem" }} src={dashIcon} alt="dashicon" />
          <Image
            style={{ marginLeft: "0.9rem" }}
            src={Dashboard}
            alt="dashboard"
          />
        </div>
        <div className={styles.menu_options}>
          <Image
            style={{ position: "absolute", left: "0" }}
            src={bg}
            alt="bg"
          />
          <Image style={{ marginLeft: "2rem" }} src={upload} alt="upload" />
        </div>
        <div className={styles.menu_options}>
          <Image style={{ marginLeft: "2rem" }} src={invoice} alt="invoice" />
        </div>
        <div className={styles.menu_options}>
          <Image style={{ marginLeft: "2rem" }} src={schedule} alt="schedule" />
        </div>
        <div className={styles.menu_options}>
          <Image style={{ marginLeft: "2rem" }} src={calander} alt="calender" />
        </div>
        <div className={styles.menu_options}>
          <Image
            style={{ marginLeft: "2rem" }}
            src={Notification}
            alt="notifications"
          />
        </div>
        <div className={styles.menu_options}>
          <Image style={{ marginLeft: "2rem" }} src={settings} alt="settings" />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.right_header}>
          <div className={styles.combined_toggle}>
            <Image
              className={styles.title_logo}
              style={{
                alignSelf: "center",
                marginRight: "1.5rem",
                cursor: "pointer",
              }}
              src={threeLines}
              onClick={menuToggle}
              alt="toggle"
            />
            <Image
              className={styles.title_logo}
              style={{ alignSelf: "center" }}
              src={logo2}
              alt="logo2"
            />
          </div>
          <span
            className={styles.span_main_title}
            style={{ fontSize: "1.2rem", fontWeight: "bold" }}
          >
            Upload CSV
          </span>

          <div>
            <Image src={headerIcons} alt="headericons" />
          </div>
        </div>
        <div className={styles.right_content}>
          <span
            className={styles.span_title}
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              alignSelf: "flex-start",
            }}
          >
            Upload CSV
          </span>
          <div className={styles.upload}>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className={styles.upload_inner}
              onClick={() => {}}
            >
              <Image
                style={{ marginBottom: "1.5rem" }}
                src={excelupload}
                alt="excelIcon"
              />
              {fileName.length > 0 ? (
                <>
                  <span>{fileName}</span>
                  <span
                    style={{ color: "#D33030", marginTop: "1rem" }}
                    onClick={() => {
                      setFileName("");
                      setObjData(null);
                      document.getElementById("fileInput").value = "";
                    }}
                  >
                    Remove
                  </span>
                </>
              ) : (
                <span style={{ color: "#999CA0" }}>
                  Drop your excel sheet here or{" "}
                  <span
                    style={{ color: "var(--primary)" }}
                    onClick={() => {
                      document.getElementById("fileInput").click();
                    }}
                  >
                    Browse
                  </span>
                </span>
              )}
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFile}
              />
            </div>
            <button
              onClick={() => {
                document.getElementById("fileInput").click();
              }}
            >
              {!showSpinner ? <Image src={uploadIcon} alt="uploadIcon" /> : ""}
              {!showSpinner ? (
                <span
                  style={{
                    color: "white",
                    marginLeft: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  Upload
                </span>
              ) : (
                ""
              )}
              {showSpinner ? <Spinner /> : ""}
            </button>
          </div>
        </div>
        {objData ? (
          <>
            <span
              className={styles.table_title}
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                marginBottom: "2rem",
                alignSelf: "flex-start",
              }}
            >
              Uploads
            </span>
            <div className={styles.excel_table}>
              <div className={styles.table_row_head}>
                <div>SI No.</div>
                <div>Links</div>
                <div>Prifix</div>
                <div>Add Tags</div>
                <div>Selected Tags</div>
              </div>
              {objData?.map((val, i) => {
                return (
                  <div key={i} className={styles.table_row}>
                    <div>{parseInt(val.id) < 10 ? `0${val.id}` : val.id}</div>
                    <div
                      style={{ textDecoration: "underline", color: "#5B93FF" }}
                    >
                      {val.links}
                    </div>
                    <div>{val.prefix}</div>
                    <div>
                      <Dropdown
                        onSelect={(data) => {
                          onSelect(data, i);
                        }}
                        data={val["select tags"].split(",")}
                      />
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      {val.selectedTags.map((a, indx) => {
                        return (
                          <div
                            key={indx}
                            className={styles.tag}
                            onClick={() => handleFilter(a, i)}
                          >
                            <span style={{ marginRight: "1rem" }}>{a}</span>
                            <Image alt="close" src={close} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Upload;
