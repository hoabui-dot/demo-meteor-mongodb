import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { DownloadOutlined } from '@ant-design/icons';

const contentStyle = {
  maxWidth: '600px',
  width: '90%',
  marginLeft: 'auto',
};

const CustomModal = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Popup
      trigger={<button className='promotion_create'>+ Tạo mã giảm giá</button>}
      modal
      contentStyle={contentStyle}
    >
      {
        <div className='modal'>
          <h2>Create a new pronmotion series</h2>
          <Formik
            initialValues={{ application: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className='form'>
                  <div className='form_left'>
                    <div className='form_label'>
                      <p>Application country: </p>
                      <Field name='country' as='select'>
                        <option value={1}>country 1</option>
                        <option value={2}>country 2</option>
                        <option value={3}>country 3</option>
                      </Field>
                    </div>
                    <div className='form_label'>
                      <p>Prefix (Optional): </p>
                      <Field
                        placeholder='Enter Type Of Promotion'
                        type='text'
                        name='prefix'
                      />
                    </div>
                    <ErrorMessage name='email' component='div' />
                    <div className='form_label'>
                      <p>Type: </p>
                      <Field name='type' as='select'>
                        <option value={1}>Type 1</option>
                        <option value={2}>Type 2</option>
                        <option value={3}>Type 3</option>
                      </Field>
                    </div>
                    <div className='form_label'>
                      <p>Application city: </p>
                      <Field name='app' as='select'>
                        <option value={1}>City 1</option>
                        <option value={2}>City 2</option>
                        <option value={3}>City 3</option>
                      </Field>
                    </div>
                    <div className='form_label'>
                      <p>Description (Miêu tả): </p>
                      <Field
                        placeholder='Enter description'
                        as='textarea'
                        name='prefix'
                      />
                    </div>
                    <ErrorMessage name='password' component='div' />
                  </div>
                  <div className='form_right'>
                    <div className='form_label'>
                      <p>Series name (Ex:BTASKEE_REWARD): </p>
                      <Field
                        placeholder='Enter code'
                        type='text'
                        name='series'
                      />
                    </div>
                    <div className='form_label'>
                      <p>Số lượng mã cần tạo: </p>
                      <Field
                        placeholder='Enter value'
                        type='text'
                        name='createCode'
                      />
                    </div>
                    <div className='form_label'>
                      <p>Value: </p>
                      <Field
                        placeholder='Enter description'
                        type='text'
                        name='value'
                      />
                    </div>
                    <div className='form_label'>
                      <p>Apply the services: </p>
                      <Field name='services' as='select'>
                        <option value={1}>services 1</option>
                        <option value={2}>services 2</option>
                        <option value={3}>services 3</option>
                      </Field>
                    </div>
                    <div className='form_label form_label--image'>
                      <p>Hình ảnh: </p>
                      <label htmlFor='image'>
                        <span>Tải hình ảnh</span>
                        <DownloadOutlined />
                        <input
                          id='image'
                          name='file'
                          type='file'
                          accept='image/*'
                          onChange={e => {
                            console.log(URL.createObjectURL(selectedImage));
                            setSelectedImage(e.target.files[0]);
                          }}
                        />
                      </label>
                      {/* <img
                        src={
                      /> */}
                    </div>
                  </div>
                </div>
                {/* <button type='submit' disabled={isSubmitting}>
                Submit
              </button> */}
              </Form>
            )}
          </Formik>
        </div>
      }
    </Popup>
  );
};

export default CustomModal;
