import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { Promotion } from '/imports/api/Promotion';

function insertLink({ title, url }) {
  LinksCollection.insert({ title, url, createdAt: new Date() });
}

const insertTask = pro => Promotion.insert({ promotion: pro });

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app',
    });

    insertLink({
      title: 'Follow the Guide',
      url: 'http://guide.meteor.com',
    });

    insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com',
    });

    insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com',
    });
  }
});

Meteor.startup(() => {
  if (Promotion.find().count() === 0) {
    [
      {
        _id: '614c147eba35ecae55716a99',
        value: {
          type: 'PERCENTAGE', // hoặc MONEY
          value: 0.2, // hoặc số tiền 30000
          maxValue: 30000.0, // ko bắt buộc nếu là MONEY
        },
        serviceId: 'pcZRQ6PqmjrAPe5gt', // id của dịch vụ, ko có là hỗ trợ tất cả
        isoCode: 'VN', // quốc gia
        description: 'Enjoy 20% discount for Cleaning Service', // tên KM
        startDate: '2021-08-09T10:03:52.361+07:00', // ngày bắt đầu
        code: 'YntIujD', // mã code
        endDate: '2021-09-08T10:03:52.361+07:00', // ngày kết thúc KM
        target: 'ASKER', // KM này dành cho đối tượng nào ( hoặc TASKER)
        createdAt: '2021-08-09T10:03:52.361+07:00',
        limit: 1.0, // số lượng code sử dụng
        typeOfPromotion: 'BOTH', // loại khuyến mại [BOTH|NEW|CURRENT],
        usersApplied: [], // mảng các Id của user có thể sử dụng mã
        active: true,
      },
      {
        _id: '614c147eba35ecae55716a99',
        value: {
          type: 'PERCENTAGE', // hoặc MONEY
          value: 0.2, // hoặc số tiền 30000
          maxValue: 30000.0, // ko bắt buộc nếu là MONEY
        },
        serviceId: 'pcZRQ6PqmjrAPe5gt', // id của dịch vụ, ko có là hỗ trợ tất cả
        isoCode: 'VN', // quốc gia
        description: 'Enjoy 20% discount for Cleaning Service', // tên KM
        startDate: '2021-08-09T10:03:52.361+07:00', // ngày bắt đầu
        code: 'YntIujD', // mã code
        endDate: '2021-09-08T10:03:52.361+07:00', // ngày kết thúc KM
        target: 'ASKER', // KM này dành cho đối tượng nào ( hoặc TASKER)
        createdAt: '2021-08-09T10:03:52.361+07:00',
        limit: 1.0, // số lượng code sử dụng
        typeOfPromotion: 'BOTH', // loại khuyến mại [BOTH|NEW|CURRENT],
        usersApplied: [], // mảng các Id của user có thể sử dụng mã
        active: true,
      },
      {
        _id: '614c147eba35ecae55716a99',
        value: {
          type: 'PERCENTAGE', // hoặc MONEY
          value: 0.2, // hoặc số tiền 30000
          maxValue: 30000.0, // ko bắt buộc nếu là MONEY
        },
        serviceId: 'pcZRQ6PqmjrAPe5gt', // id của dịch vụ, ko có là hỗ trợ tất cả
        isoCode: 'VN', // quốc gia
        description: 'Enjoy 20% discount for Cleaning Service', // tên KM
        startDate: '2021-08-09T10:03:52.361+07:00', // ngày bắt đầu
        code: 'YntIujD', // mã code
        endDate: '2021-09-08T10:03:52.361+07:00', // ngày kết thúc KM
        target: 'ASKER', // KM này dành cho đối tượng nào ( hoặc TASKER)
        createdAt: '2021-08-09T10:03:52.361+07:00',
        limit: 1.0, // số lượng code sử dụng
        typeOfPromotion: 'BOTH', // loại khuyến mại [BOTH|NEW|CURRENT],
        usersApplied: [], // mảng các Id của user có thể sử dụng mã
        active: false,
      },
      {
        _id: '614c147eba35ecae55716a99',
        value: {
          type: 'PERCENTAGE', // hoặc MONEY
          value: 0.2, // hoặc số tiền 30000
          maxValue: 30000.0, // ko bắt buộc nếu là MONEY
        },
        serviceId: 'pcZRQ6PqmjrAPe5gt', // id của dịch vụ, ko có là hỗ trợ tất cả
        isoCode: 'VN', // quốc gia
        description: 'Enjoy 20% discount for Cleaning Service', // tên KM
        startDate: '2021-08-09T10:03:52.361+07:00', // ngày bắt đầu
        code: 'YntIujD', // mã code
        endDate: '2021-09-08T10:03:52.361+07:00', // ngày kết thúc KM
        target: 'ASKER', // KM này dành cho đối tượng nào ( hoặc TASKER)
        createdAt: '2021-08-09T10:03:52.361+07:00',
        limit: 1.0, // số lượng code sử dụng
        typeOfPromotion: 'BOTH', // loại khuyến mại [BOTH|NEW|CURRENT],
        usersApplied: [], // mảng các Id của user có thể sử dụng mã
        active: true,
      },
      {
        _id: '614c147eba35ecae55716a99',
        value: {
          type: 'mother', // hoặc MONEY
          value: 0.2, // hoặc số tiền 30000
          maxValue: 30000.0, // ko bắt buộc nếu là MONEY
        },
        serviceId: 'pcZRQ6PqmjrAPe5gt', // id của dịch vụ, ko có là hỗ trợ tất cả
        isoCode: 'VN', // quốc gia
        description: 'Enjoy 20% discount for Cleaning Service', // tên KM
        startDate: '2021-08-09T10:03:52.361+07:00', // ngày bắt đầu
        code: 'YntIujD', // mã code
        endDate: '2021-09-08T10:03:52.361+07:00', // ngày kết thúc KM
        target: 'ASKER', // KM này dành cho đối tượng nào ( hoặc TASKER)
        createdAt: '2021-08-09T10:03:52.361+07:00',
        limit: 1.0, // số lượng code sử dụng
        typeOfPromotion: 'BOTH', // loại khuyến mại [BOTH|NEW|CURRENT],
        usersApplied: [], // mảng các Id của user có thể sử dụng mã
        active: false,
      },
      {
        _id: '614c147eba35ecae55716a99',
        value: {
          type: 'employer', // hoặc MONEY
          value: 0.2, // hoặc số tiền 30000
          maxValue: 30000.0, // ko bắt buộc nếu là MONEY
        },
        serviceId: 'pcZRQ6PqmjrAPe5gt', // id của dịch vụ, ko có là hỗ trợ tất cả
        isoCode: 'VN', // quốc gia
        description: 'Enjoy 20% discount for Cleaning Service', // tên KM
        startDate: '2021-08-09T10:03:52.361+07:00', // ngày bắt đầu
        code: 'YntIujD', // mã code
        endDate: '2021-09-08T10:03:52.361+07:00', // ngày kết thúc KM
        target: 'ASKER', // KM này dành cho đối tượng nào ( hoặc TASKER)
        createdAt: '2021-08-09T10:03:52.361+07:00',
        limit: 1.0, // số lượng code sử dụng
        typeOfPromotion: 'BOTH', // loại khuyến mại [BOTH|NEW|CURRENT],
        usersApplied: [], // mảng các Id của user có thể sử dụng mã
        active: false,
      },
      {
        _id: '614c147eba35ecae55716a99',
        value: {
          type: 'hello', // hoặc MONEY
          value: 0.2, // hoặc số tiền 30000
          maxValue: 30000.0, // ko bắt buộc nếu là MONEY
        },
        serviceId: 'pcZRQ6PqmjrAPe5gt', // id của dịch vụ, ko có là hỗ trợ tất cả
        isoCode: 'VN', // quốc gia
        description: 'Enjoy 20% discount for Cleaning Service', // tên KM
        startDate: '2021-08-09T10:03:52.361+07:00', // ngày bắt đầu
        code: 'YntIujD', // mã code
        endDate: '2021-09-08T10:03:52.361+07:00', // ngày kết thúc KM
        target: 'ASKER', // KM này dành cho đối tượng nào ( hoặc TASKER)
        createdAt: '2021-08-09T10:03:52.361+07:00',
        limit: 1.0, // số lượng code sử dụng
        typeOfPromotion: 'BOTH', // loại khuyến mại [BOTH|NEW|CURRENT],
        usersApplied: [], // mảng các Id của user có thể sử dụng mã
        active: true,
      },
    ].forEach(insertTask);
  }
});
