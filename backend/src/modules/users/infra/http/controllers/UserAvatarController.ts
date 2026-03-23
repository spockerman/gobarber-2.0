import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";

import UpdateUserAvatarService from "@modules/users/services/UpdateUserAvatarService";
import AppError from "@shared/errors/AppError";

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    if (!request.file) {
      throw new AppError("Avatar file is missing", 400);
    }

    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatar_filename: request.file.filename,
    });

    return response.json(classToClass(user));
  }
}
