'use client';

import { useState } from 'react';
import styles from '../page.module.css';

export default function ContactForm() {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/meezrkdz", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('SUCCESS');
                form.reset();
            } else {
                setStatus('ERROR');
            }
        } catch (error) {
            setStatus('ERROR');
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input type="text" id="name" name="name" className={styles.input} required />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Work Email</label>
                <input type="email" id="email" name="email" className={styles.input} required />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>How can we help?</label>
                <textarea id="message" name="message" className={styles.textarea} required></textarea>
            </div>

            {status === 'SUCCESS' ? (
                <p className={styles.successMessage} style={{ color: 'var(--primary)', fontWeight: 'bold', marginTop: '1rem' }}>
                    Thanks for your message! We'll be in touch soon.
                </p>
            ) : (
                <button type="submit" className={styles.submitBtn}>
                    Send Message
                </button>
            )}

            {status === 'ERROR' && (
                <p style={{ color: 'red', marginTop: '1rem' }}>Oops! There was an error delivering your message.</p>
            )}
        </form>
    );
}
