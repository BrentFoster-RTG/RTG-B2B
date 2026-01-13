import styles from "./FilesCard.module.scss";

const FileCard = ({ file }) => {
  return (
    <a
      href={file.url}
      target="_blank"
      rel="noopener noreferrer"
      download
      className={styles.card}
    >
      <span className={styles.tag}>{file.category}</span>

      <h3 className={styles.title}>{file.title}</h3>
      <p className={styles.description}>{file.description}</p>

      <div className={styles.fileInfo}>
        <span>📄</span>
        <div>
          <strong>{file.fileName}</strong>
          <small>{file.size}</small>
        </div>
      </div>
    </a>
  );
};

export default FileCard;
