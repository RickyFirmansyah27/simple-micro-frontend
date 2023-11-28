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
    border: '1.5px solid #ccc',
    outline: 'none',
    '&:focus': {
      borderColor: '#87CEEB',
      outline: '2px solid #87CEEB',
    },
    resize: 'vertical',
  },
  characterCount: {
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: '400',
    position: 'absolute',
    bottom: 0,
    left: '520px',
    color: '#333333',
  },
  errorText: {
    fontFamily: 'Poppins',
    color: 'red',
    fontSize: '12px',
    lineHeight: '18px',
    position: 'absolute',
    bottom: 0,
    left: '10px',
  },
};

function TextArea() {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const maxCharacters = 201;

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
        style={{ ...styles.textArea, borderColor: error ? 'red' : '#ccc' }}
        placeholder="Placeholder"
        value={text}
        onChange={handleChange}
        maxLength={maxCharacters}
      />
      <div style={{marginTop: '20px'}}>
        {error && <div style={styles.errorText}>Error Label</div>}
        <div style={styles.characterCount}>
          {text.length}/200
        </div>
      </div>
    </div>
  );
}

export default TextArea;
