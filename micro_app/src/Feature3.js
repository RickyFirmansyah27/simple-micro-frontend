import React, { useState } from 'react';

const styles = {
  textAreaWrapper: {
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
  },
  label: {
    fontFamily: 'Poppins',
    fontSize: '18px',
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
    border: '2px solid #ccc',
    outline: 'none',
    '&:focus': {
      borderColor: '#87CEEB',
    },
    resize: 'vertical',
  },
  characterCount: {
    position: 'absolute',
    bottom: 0,
    left: '520px',
    marginTop: '8px',
    color: '#666',
  },
  errorText: {
    color: 'red',
    fontSize: '12px',
    marginTop: '4px',
    position: 'absolute',
    bottom: 0,
    left: '10px',
  },
};

function TextArea() {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const maxCharacters = 200;

  const handleChange = (event) => {
    const newText = event.target.value;
    if (newText.length < maxCharacters) {
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
        style={{ ...styles.textArea, borderColor: error ? 'red' : '#87CEEB' }}
        placeholder="Placeholder"
        value={text}
        onChange={handleChange}
        maxLength={maxCharacters}
      />
      <div style={{marginTop: '20px'}}>
        {error && <div style={styles.errorText}>Error Label</div>}
        <div style={styles.characterCount}>
          {text.length}/{maxCharacters}
        </div>
      </div>
    </div>
  );
}

export default TextArea;
