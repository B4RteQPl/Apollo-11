<?php

namespace App\Http\Controllers;

use App\Models\Intention;
use Illuminate\Http\Request;

class IntentionController extends Controller
{
    /**
     * Display a listing of the intentions.
     */
    public function index()
    {
        return response()->json([
            'data' => Intention::with('strategies')->get()
        ]);
    }

    /**
     * Store a newly created intention.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'query' => 'required|string',
            'budget_max' => 'nullable|integer',
            'currency' => 'nullable|string',
            'location' => 'nullable|string',
            'radius_km' => 'nullable|integer',
            'condition' => 'nullable|string',
            'category' => 'nullable|string',
        ]);

        $intention = Intention::create($validated);

        return response()->json([
            'data' => $intention
        ], 201);
    }

    /**
     * Display the specified intention.
     */
    public function show($id)
    {
        $intention = Intention::with('strategies', 'history')->findOrFail($id);

        return response()->json([
            'data' => $intention
        ]);
    }

    /**
     * Update the specified intention.
     */
    public function update(Request $request, $id)
    {
        $intention = Intention::findOrFail($id);

        $validated = $request->validate([
            'query' => 'sometimes|string',
            'budget_max' => 'nullable|integer',
            'currency' => 'nullable|string',
            'location' => 'nullable|string',
            'radius_km' => 'nullable|integer',
            'condition' => 'nullable|string',
            'category' => 'nullable|string',
        ]);

        $intention->update($validated);

        return response()->json([
            'data' => $intention
        ]);
    }

    /**
     * Remove the specified intention.
     */
    public function destroy($id)
    {
        $intention = Intention::findOrFail($id);
        $intention->delete();

        return response()->json(null, 204);
    }

    /**
     * Get strategies for the specified intention.
     */
    public function strategies($id)
    {
        $intention = Intention::findOrFail($id);
        $strategies = $intention->strategies()->with('sources')->get();

        return response()->json([
            'data' => $strategies
        ]);
    }
}
