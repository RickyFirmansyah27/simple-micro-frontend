import React, { useState } from 'react';
import './App.css';

const styles = {
  textAreaWrapper: {
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '18px',
    letterSpacing: '0em',
    textAlign: 'left',
    marginBottom: '8px',
  },
  textArea: {
    width: '552px',
    height: '136px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  characterCount: {
    position: 'relative',
    bottom: 0,
    left: 530,
    marginTop: '8px',
    color: '#666',
  },
  errorText: {
    color: 'red',
    fontSize: '12px',
    marginTop: '4px',
  },
};

function TextArea() {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const maxCharacters = 200;

  const handleChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= maxCharacters) {
      setText(newText);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div style={styles.textAreaWrapper}>
      <h2 style={styles.label}>Label</h2>
      <textarea
        style={{ ...styles.textArea, borderColor: error ? 'red' : '#ccc' }}
        placeholder="Placeholder"
        value={text}
        onChange={handleChange}
        maxLength={maxCharacters}
      />
      {error && <div style={styles.errorText}>Erorr Label</div>}
      <div style={styles.characterCount}>
        {text.length}/{maxCharacters}
      </div>
    </div>
  );
}

export default TextArea;
