import { object, string } from 'yup';
import ApiError from '../api-error.js';

const createUserSchema = object({
  fullname: string(),
  username: string().required(),
  password: string().min(6).required(),
  address: string(),
  role: string().oneOf(['staff', 'admin']),
  phone: string().matches(
    '/(84|0[3|5|7|8|9])+([0-9]{8})\b/g',
    'Invalid phone number',
  ),
});
export const create = async (req, res, next) => {
    try {
        req.body = await createUserSchema.validate(req.body);        
    } catch (error) {
        return next(new ApiError(400, error.message));
    }
    next();
};

const updateUserSchema = object({
  fullname: string(),
  username: string().required(),
  address: string(),
  role: string().oneOf(['staff', 'admin']),
  phone: string().matches(
    /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
    'Số điện thoại không hợp lệ'
  ),
});
export const update = async (req, res, next) => {
    try {
        req.body = await updateUserSchema.validate(req.body);
    } catch (error) {
        return next(new ApiError(400, error.message));
    }
    next();
}
