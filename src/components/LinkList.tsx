import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import LinkCard from '@/components/LinkCard';
import Modal from '@/components/modal/Modal';
import style from '@/styles/LinkList.module.css';
import { folderList } from '@/types/folderDataType.type';

interface link {
  id: number;
  title: string;
  url: string;
  createdAt: string;
  created_at: string;
  imageSource: string;
  image_source: string;
}
interface linkListProp {
  linkList: link[];
  folderList?: folderList[] | any;
}

let modalType = '';
let modalData = {};
let modalRoot: HTMLDivElement;
function LinkList({ linkList, folderList }: linkListProp) {
  const [isModal, setIsModal] = useState(false);
  const enableFolderAddModal = (type: string, data = folderList) => {
    modalType = type;
    modalData = data;
    setIsModal(true);
  };

  useEffect(() => {
    modalRoot = document.getElementById('modal-root') as HTMLDivElement;
    setIsModal(false);
  }, []);

  return (
    <>
      {isModal && createPortal(<Modal type={modalType} onClose={() => setIsModal(false)} data={modalData} />, modalRoot)}
      <div id={style.linkList}>
        <div className={style.linkGridBox}>
          {linkList.length
            ? linkList.map((item) => {
                return <LinkCard data={item} key={item?.id} openModal={enableFolderAddModal} />;
              })
            : null}
        </div>
        {!linkList.length && <div className={style.noLink}>저장된 링크가 없습니다</div>}
      </div>
    </>
  );
}

export default LinkList;
