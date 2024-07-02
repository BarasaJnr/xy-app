import type { Slice, SliceData } from './types';

export function SliceData(slice: Slice) {
    return slice.data as SliceData;
}