import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import { MOCK_POSTS } from '../../../../MOCK_DATA/MOCK_POSTS';
import { PostDTO } from '../../shared/dtos/post-dto';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private _api: ApiService) {}

  getAll(): Observable<PostDTO> {
    return from(MOCK_POSTS);
  }

  getOne(path: string): Observable<PostDTO> {
    return from(MOCK_POSTS).pipe();
  }
}
