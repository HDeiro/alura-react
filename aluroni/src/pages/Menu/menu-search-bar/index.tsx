import React from "react";
import style from "./menu-search-bar.module.scss"
import { CgSearch } from "react-icons/cg";

interface MenuSearchBarProps {
    searchContent: string;
    setSearchContent: React.Dispatch<React.SetStateAction<string>>;
}

export default function MenuSearchBar({searchContent, setSearchContent}: MenuSearchBarProps) {
    return (
        <div className={style.menuSearchBar}>
            <input type="text" 
                value={searchContent}
                onChange={evt => setSearchContent(evt.target.value)} />
            <CgSearch size="20" color="#4C4D5E"/>
        </div>
    )
}